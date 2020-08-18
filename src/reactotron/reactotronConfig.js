import Reactotron, {networking, overlay} from 'reactotron-react-native'

if (__DEV__) {
    Reactotron
        .configure({
            host: '192.168.0.8'
        })
        .use(networking())
        .use(overlay())
        .useReactNative()
        .connect()

    console.tron = Reactotron
}

export default Reactotron;