import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Taipei 101",
    description: "The highest building in Taiwan!",
    imageUrl: "https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_7927_16.jpg&sizetype=3",
    address: "101F., No.7, Sec. 5, Xinyi Rd., Xinyi Dist., Taipei City 110, Taiwan (R.O.C.) ",
    location: {
      lat: 25.0338489,
      lng: 121.5645294
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Taipei 101",
    description: "The highest building in Taiwan!",
    imageUrl: "https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_7927_16.jpg&sizetype=3",
    address: "101F., No.7, Sec. 5, Xinyi Rd., Xinyi Dist., Taipei City 110, Taiwan (R.O.C.) ",
    location: {
      lat: 25.0338489,
      lng: 121.5645294
    },
    creator: "u2"
  }
]

const UserPlaces = props => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces