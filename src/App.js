import {Button, KIND, SIZE} from '@driven-crm/ui/Button'
import {AppNavBar, setItemActive} from '@driven-crm/ui/AppNavBar'
import {Drawer} from '@driven-crm/ui/Drawer'
import {DarkmodeToggle} from '@driven-crm/ui/DarkmodeToggle'
import {FileUploader} from '@driven-crm/ui/FileUploader'

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode, setLightMode } from './store/actions/darkmodeActions';
import ChangeUserDetails from './ChangeUserDetails'
import Login from './auth/Login'
import { logout } from './store/actions/authActions'
function App() {

  const [mainItems, setMainItems] = useState([
    { active: true, label: 'Home'},
    {
      label: 'Main B',
      children: [
        {label: 'Secondary A'},
        {label: 'Secondary B'},
      ],
    },
  ])
  const darkmode = useSelector(state => state.darkmodeReducer.darkmode)
  const user = useSelector(state => state.authReducer.user)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [image, setImage] = useState(localStorage.getItem('userImage') ? localStorage.getItem('userImage') : '')
  
  const dispatch = useDispatch()

  const handleChange = () => {
    if(darkmode) {
      dispatch(setLightMode())
    } else {
      dispatch(setDarkMode())
    }
  }

  const handleUpload = files => {
    localStorage.setItem('userImage', files[0].preview)
    setImage(files[0].preview)
  }
  
  return (
    <div className={` ${darkmode && 'dark'} h-full`}>
      <div className='bg-background text-text dark:bg-dark-background dark:text-dark-text h-full pt-28'>
        {
          !user ? (
            <Login />
          ) : (
            <>
              <AppNavBar 
                title='Demo project'
                mainItems={mainItems}
                onMainItemSelect={(item) => {
                      setMainItems(prev =>
                        setItemActive(prev, item)
                      )
                    }}
                username={user?.name}
                usernameSubtitle={user?.position}
                userImgUrl={image}
                userItems={[
                  { icon: <SettingsIcon />, label: "Settings" },
                ]}
                onUserItemSelect={item => setDrawerOpen(true)}
              />
              <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <div className='h-full flex flex-col'>
                  <DarkmodeToggle isDark={darkmode} onChange={handleChange} label='Dark mode' />
                  
                  <ChangeUserDetails />

                  <div className='mt-6'>
                  Upload user image
                  <FileUploader 
                    multiple={false}
                    onUpload={handleUpload}
                  />
                  </div>
                  <div className='mt-auto'>
                    <Button kind={KIND.tertiary}
                      size={SIZE.compact}
                      onClick={() => dispatch(logout())}
                    >Logout</Button>

                  </div>
                </div>
              </Drawer>
            </>
          )
        }
        

      </div>
    </div>
  );
}

const SettingsIcon = () => {
  return (
    <svg width='20' viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  )
}

export default App;
