import React from 'react'
import A from '@atom'
import M from '@molecule'
import myIcon from '@constant/icon'
import Styled from './SideBar.style'

const SideBar = () => {
  return (
    <Styled.SideBarContainer>
      <Styled.WorkSpacePart>
        <M.ButtonDiv
          buttonStyle={WorkSpaceButtonStyle}
          textStyle={WorkSpaceTextStyle}
        >
          <>
            부스트캠프 2020 멤버쉽
            <A.Icon icon={myIcon.edit} customStyle={WorkSpaceIconStyle} />
          </>
        </M.ButtonDiv>
      </Styled.WorkSpacePart>
      <Styled.OtherPagePart>
        <M.ButtonDiv
          buttonStyle={OtherChannelButtonStyle}
          textStyle={OtherChannelTextStyle}
        >
          <>
            <A.Icon icon={myIcon.thread} customStyle={OtherChannelIconStyle} />
            Threads
          </>
        </M.ButtonDiv>
        <M.ButtonDiv
          buttonStyle={OtherChannelButtonStyle}
          textStyle={OtherChannelTextStyle}
        >
          <>
            <A.Icon icon={myIcon.message} customStyle={OtherChannelIconStyle} />
            All DMs
          </>
        </M.ButtonDiv>
        <M.ButtonDiv
          buttonStyle={OtherChannelButtonStyle}
          textStyle={OtherChannelTextStyle}
        >
          <>
            <A.Icon icon={myIcon.search} customStyle={OtherChannelIconStyle} />
            Channel Browser
          </>
        </M.ButtonDiv>
        <M.ButtonDiv
          buttonStyle={OtherChannelButtonStyle}
          textStyle={OtherChannelTextStyle}
        >
          <>
            <A.Icon icon={myIcon.people} customStyle={OtherChannelIconStyle} />
            People
          </>
        </M.ButtonDiv>
      </Styled.OtherPagePart>
      <Styled.SectionChannelPart>
        <M.Section title="Channels" />
        <M.Section title="Direct Messages" />
      </Styled.SectionChannelPart>
    </Styled.SideBarContainer>
  )
}

const WorkSpaceButtonStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  hoverBackgroundColor: 'orange',
}

const OtherChannelButtonStyle = {
  width: '100%',
  height: '100%',
  hoverBackgroundColor: 'orange',
  display: 'flex',
  justifyContent: 'flex-start',
}

const OtherChannelTextStyle = {
  fontSize: '12px',
  color: 'textGrey',
}

const OtherChannelIconStyle = {
  color: 'textGrey',
  fontSize: '12px',
  margin: '0px 10px 0px 20px',
}

const WorkSpaceTextStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
}

const WorkSpaceIconStyle = {
  color: 'black',
  fontSize: '16px',
  margin: '0px 0px 0px 20px',
}

export default SideBar
