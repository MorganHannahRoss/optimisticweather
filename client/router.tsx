/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import ActivityHome from './components/ActivityPanel/ActivityHome'
import ActivityList from './components/ActivityPanel/ActivityList'
import Events from './components/Event/Events'
import AIPopup from './components/AIPopup/AIPopup'
import Clothing from './components/ActivityPanel/Clothing'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route index element={<ActivityHome />} />
      <Route path="/activities" element={<ActivityList />} />
      <Route path="/events" element={<Events />} />
      <Route path="/clothing" element={<Clothing />} />
      <Route path="/ai" element={<AIPopup />} />
    </Route>,
  ]),
)

export default router
