import React from 'react'
import FooterCustom from '../../components/layout/footer'
import HeaderCustom from '../../components/layout/header'
import SidebarCustom from '../../components/layout/sidebar'

function HomePage() {
  return (
    <>
    <HeaderCustom />
    <SidebarCustom />
    <div>
        content
    </div>
    <FooterCustom />
    </>
  )
}

export default HomePage