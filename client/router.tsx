/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import ActivityHome from './components/ActivityPanel/ActivityHome'
import ActivityList from './components/ActivityPanel/ActivityList'
import Events from './components/ActivityPanel/Events'
import AIPopup from './components/AIPopup/AIPopup'

const router = createBrowserRouter(
  createRoutesFromElements([
  <Route path="/" element={<App />}>
    <Route index element={<ActivityHome />} />
    <Route path='/activities' element={<ActivityList />} />
    {/* second route here till we work out if we need both */}
    <Route path='/activities/:id' element={<ActivityList />} />
    <Route path='/events' element={<Events />} />
    <Route path='/ai' element={<AIPopup />} />
  </Route>
])
)

export default router
