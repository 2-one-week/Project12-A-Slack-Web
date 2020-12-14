import React, { useState, useEffect } from 'react'
import myAxios from '@util/myAxios'
import A from '@atom'
import M from '@molecule'
import { UserType } from '@type/user.type'
import { useHistory } from 'react-router-dom'
import { getThreads, initThreadList } from '@store/reducer/thread.reducer'
import Styled from './DmCard.style'
import { DmCardProps } from './index'

interface dmChannelInfoProps {
  id: number
  name: string
  type: 'PRIVATE' | 'PUBLIC' | 'DM'
  createdAt: string
  updatedAt: string
  deletedAt?: string
  workspaceId: number
  memberCount: number
  memberMax3: UserType[]
}

const DmCard = ({ dmChannel }: DmCardProps) => {
  const history = useHistory()
  const [dmChannelInfo, setDmChannelInfo] = useState<dmChannelInfoProps>({
    id: 0,
    name: '',
    type: 'DM',
    createdAt: '',
    updatedAt: '',
    workspaceId: 0,
    memberCount: 0,
    memberMax3: [],
  })
  useEffect(() => {
    // dispatch(initThreadList())
    // dispatch(getCurrentChannel.request({ channelId: +channelId }))
    const getChannelInfo = async () => {
      const {
        data: { data },
      } = await myAxios.get({
        path: `/channel/${dmChannel.id}`,
      })
      const dmInfo = { ...dmChannel, ...data }
      setDmChannelInfo(dmInfo)
    }
    getChannelInfo()
  }, [])

  const handleDmClick = () => {
    history.push(`/workspace/${dmChannel.workspaceId}/channel/${dmChannel.id}`)
  }

  const getDateInfoFirst = (date: any) => {
    const dateString = date.replace(/\s/g, 'T')
    const temp = String(new Date(dateString)).split(' ')
    const parsedDate = `${temp[0]}, ${temp[1]} ${temp[2]}`
    return parsedDate
  }

  const getDateInfoSecond = (date: any) => {
    const dateString = date.replace(/\s/g, 'T')
    const temp = String(new Date(dateString)).split(' ')
    let parsedDate = ``
    if (typeof temp[4] !== 'undefined') parsedDate = temp[4].slice(0, 5)
    return parsedDate
  }

  // TODO: 이미지 보여주기, 날짜 변환
  return (
    <Styled.Container onClick={handleDmClick}>
      <A.Text customStyle={dmDateTextStyle}>
        {getDateInfoFirst(dmChannelInfo.createdAt)}
      </A.Text>
      <M.ButtonDiv buttonStyle={dmCardButtonStyle}>
        <Styled.DmCardMain>
          <Styled.DmCardContent>
            <Styled.DmCardImageContainer>
              {dmChannelInfo.memberMax3.map((member) => {
                return (
                  <A.Image
                    key={member.id}
                    url={member.profileImageUrl}
                    customStyle={dmImageStyle}
                  />
                )
              })}
              {dmChannelInfo.memberCount > 3 ? <A.Text>...</A.Text> : null}
            </Styled.DmCardImageContainer>
            <A.Text customStyle={dmPeopleName}>{dmChannelInfo.name}</A.Text>
          </Styled.DmCardContent>
          <A.Text customStyle={dmDateTimeStyle}>
            {getDateInfoSecond(dmChannelInfo.updatedAt)}
          </A.Text>
        </Styled.DmCardMain>
      </M.ButtonDiv>
    </Styled.Container>
  )
}

const dmImageStyle = {
  height: '3rem',
  width: '3rem',
  margin: '0px 0px 0px -5px',
  padding: '0px',
  radius: '4px',
  cursor: 'auto',
}

const dmCardButtonStyle = {
  padding: '10px',
  display: 'flex',
  borderRadius: '10px',
  border: '1px solid rgb(230, 230, 230)',
  backgroundColor: 'white',
  hoverBackgroundColor: 'whiteGrey',
}

const dmDateTimeStyle = {
  fontSize: '12px',
  color: 'grey',
  fontWeight: 'bold',
}

const dmPeopleName = {
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0px 0px 0px 5px',
}

const dmDateTextStyle = {
  fontSize: '12px',
  fontWeight: 'bold',
  margin: '0px 0px 8px 5px',
}

export default DmCard
