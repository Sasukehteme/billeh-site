export type Client = {
    index: number
    image: string
    name: string
    channelType: string
    subs: number
    views: number
}

let CLIENTS: Array<Client> = [
    {
      index: 1,
      image: "/notho.png",
      name: "notho",
      channelType: "gamer",
      subs: 100,
      views: 100
    },
    {
      index: 2,
      image: "/notho.png",
      name: "notho",
      channelType: "test",
      subs: 100,
      views: 100
    },
    {
      index: 3,
      image: "/notho.png",
      name: "notho",
      channelType: "gamer",
      subs: 100,
      views: 100
    },
    {
      index: 4,
      image: "/notho.png",
      name: "notho",
      channelType: "test",
      subs: 100,
      views: 100
    },
    {
      index: 5,
      image: "/notho.png",
      name: "notho",
      channelType: "gamer",
      subs: 100,
      views: 100
    },
    {
      index: 6,
      image: "/notho.png",
      name: "notho",
      channelType: "test",
      subs: 100,
      views: 100
    }
]

export { CLIENTS };