import React from 'react';
import get from 'lodash.get';

import { makeStyles } from '@material-ui/styles';
import { TableBody, TableCell, TableRow } from '@material-ui/core';

import RecordControls from './RecordControls';

const useStyles = makeStyles(({ palette }) => {
  const isDark = palette.type === 'dark';

  return {
    cell: {
      '& a': {
        color: palette.primary[isDark ? 'light' : 'main'],
      },
    },
    controls: {},
    noResults: {
      color: palette.grey[isDark ? 200 : 400],
      textAlign: 'center',
    },
    row: {
      '& .controls': {
        color: palette.grey[isDark ? 300 : 600],
        visibility: 'hidden',
      },
      '&:hover .controls': {
        visibility: 'visible',
      }
    }
  };
});

export function RecordBody({ data = [], numColumns, paths, rows, withControls }) {
  const classes = useStyles();

  const isEmpty = () => {
    if ((!data || data.length === 0) && (!rows || rows.length === 0)) {
      return true;
    }

    return false;
  }
  
  const getProperties = () => {
    return data.map((item, i) => {
      const cells = paths.map((path, j) => {
        const getVal = (property) => {
          let value = '';

          if (Array.isArray(property)) {
            property.forEach((p) => {
              value = `${value} ${get(item, p)}`;
            });
          } else {
            value = get(item, property);
          }

          return value;
        }
        
        const Wrapper = () => {
          if (typeof path === 'object' && !(path instanceof Array) && Object.keys(path).length > 0) {
            // This is only supporting Next Link components right now.
            let href = path.href;
            const regex = /{([^)]*)}/g;
            const match = regex.exec(path.href);

            if (match.length > 0) {
              href = path.href.replace(match[0], get(item, match[1]));
            }

            return (
              <path.component href={href}>
                <a>
                  {getVal(path.value)}
                </a>
              </path.component>
            );
          }

          return getVal(path);
        }       

        return (
          <TableCell className={classes.cell} key={j}>
            <Wrapper />
          </TableCell>
        )
      });

      return (
        <TableRow className={classes.row} key={i}>
          {cells}
          { withControls 
            ? (
                <TableCell>
                  <div className='controls'>
                    <RecordControls item={item} {...withControls} />
                  </div>
                </TableCell>
            )
            : null
          }
        </TableRow>
      );
    });
  };

  const getRows = () => {
    return rows.map((row, index) => {
      const renderedCells = Object.keys(row).map((key) => {
        const value = row[key];

        return (
          <TableCell key={value}>
            {value}
          </TableCell>
        );
      });

      return (
        <TableRow className={classes.row} key={index}>
          {renderedCells}
          { withControls
            ? (
                <TableCell>
                  <div className='controls'> 
                    <RecordControls item={row} {...withControls} />
                  </div>
                </TableCell>
            )
            : null
          }
        </TableRow>
      );
    });
  };

  let content;
  if (isEmpty()) {
    content = (
      <TableRow>
        <TableCell
          className={classes.noResults}
          colSpan={numColumns + (withControls ? 1 : 0) }
        >
          No results
        </TableCell>
      </TableRow>
    );
  } else if (rows) {
    content = getRows();
  } else {
    content = getProperties();
  }

  return (
    <TableBody>
      {content}
    </TableBody>
  )
};

export default RecordBody;