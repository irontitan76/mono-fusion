export const ManifestContext = React.createContext({});

export default function({ children, manifest }) {
  return (
    <ManifestContext.Provider value={manifest}>{children}</ManifestContext.Provider>
  );
}
