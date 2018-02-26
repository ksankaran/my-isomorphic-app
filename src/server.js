import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './components/App';
import configureStore from './store';
import appSaga from './saga';
import { Provider } from 'react-redux';
import reducers from './reducers';

const { CLIENT_ONLY } = process.env;
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use('/static', express.static('public'));

app.get('*', async (req, res) => {
  const context = {};
  const store = configureStore({});
  // run saga sync
  await store.runSaga(appSaga).done;

  const state = store.getState();
  res.render('layout', {
    state: JSON.stringify(state),
    content: ReactDOMServer.renderToString(
      CLIENT_ONLY
      ? '' 
      : (
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App/>
          </StaticRouter>
        </Provider>
      )
    )
  });
});

app.listen(3000, () => console.log('App listening at 3000'));
