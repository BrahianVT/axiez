import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider} from 'react-query';
import { HashRouter} from 'react-router-dom';
const queryClient = new QueryClient(); 


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <App/>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

