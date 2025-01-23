import React from 'react'
import { UserProfile,PostView } from '../../../../components'

const LeftPanel = () => {
  return (
    <>
        <div className="leftPanel text-white h-full w-[18.75rem] max-md:w-full max-md:flex max-md:justify-center">
          <UserProfile
          maxWidth={'36rem'}
          smWidth={'full'}
          />
          <PostView/>
        </div>
    </>
  )
}

export default LeftPanel