import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes/AppRouter'
import { store } from './store/store'

export const ContactApp = () => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </Provider>
    )
}
