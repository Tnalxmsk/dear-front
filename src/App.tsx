import { QueryProvider } from './provider/query/QueryProvider.tsx';
import { AppRouterProvider } from './provider/route/AppRotuerProvider.tsx';
import GlobalStyle from './styles/global-style.ts';

function App() {

  return (
    <QueryProvider>
      <GlobalStyle />
      <AppRouterProvider />
    </QueryProvider>
  );
}

export default App;
