import React from 'react'

import { Image, Dropdown } from 'semantic-ui-react'
import logo from '~/assets/img/ECMWF_logo.png'

const Header = props => (
  <div
    style={{
      paddingLeft: '20px',
      paddingBottom: '10px',
      paddingTop: '20px',
      backgroundColor: '#24252a',
    }}
  >
    <Image src={logo} size="small" verticalAlign="bottom" />
    <span style={{ paddingLeft: '40px', color: 'white', fontSize: '18px' }}>
      ecPoint-Calibrate
    </span>
    <span style={{ paddingLeft: '10px', color: 'white' }}>
      v{window.require('electron').remote.app.getVersion()}
    </span>
    {props.workflow !== null && (
      <div
        style={{
          float: 'right',
          paddingRight: '10px',
          marginTop: '-10px',
        }}
      >
        <Dropdown text="Menu" icon="bars" floating labeled button className="icon">
          <Dropdown.Menu>
            {props.workflow === 'C' && (
              <>
                <Dropdown.Item
                  disabled={props.page.activePageNumber !== 2}
                  onClick={() => props.onSaveOperationClicked('breakpoints-upload')}
                >
                  Upload breakpoints CSV
                </Dropdown.Item>
                <Dropdown.Item
                  disabled={props.page.activePageNumber !== 2}
                  onClick={() => props.onSaveOperationClicked('breakpoints')}
                >
                  Save breakpoints as CSV
                </Dropdown.Item>
                <Dropdown.Item
                  disabled={props.page.activePageNumber !== 2}
                  onClick={() => props.onSaveOperationClicked('mf')}
                >
                  Save MFs as CSV
                </Dropdown.Item>
                <Dropdown.Item
                  disabled={props.page.activePageNumber !== 2}
                  onClick={() => props.onSaveOperationClicked('wt')}
                >
                  Save WTs as PNG
                </Dropdown.Item>
                <Dropdown.Item
                  disabled={props.page.activePageNumber !== 2}
                  onClick={() => props.onSaveOperationClicked('bias')}
                >
                  Save WT biases
                </Dropdown.Item>
                <Dropdown.Item
                  disabled={props.page.activePageNumber !== 2}
                  onClick={() => props.onSaveOperationClicked('all')}
                >
                  Save Operation
                </Dropdown.Item>
              </>
            )}
            <Dropdown.Item onClick={() => props.resetApp()}>Home</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )}
  </div>
)

export default Header
