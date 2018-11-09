// ./store/user.js
import { ChildVuex } from 'super-vuex'

// 'user'为命名空间
const child = new ChildVuex('user')
export default child

child.setState({
  name: 'evio',
  age: 18
})
