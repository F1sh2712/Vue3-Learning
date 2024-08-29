import { reactive, ref } from 'vue';
import  axios from 'axios'

export default function() {
    // 数据
    let sum = ref(0)
    // 方法
    function add(){
        sum.value += 1
    }
    // 返回值
    return {sum, add}
}