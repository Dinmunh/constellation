export default {
  // 修改星座名
  setConsName(state, consName) {
    state.consName = consName;
  },
  // 修改运势类型
  setType(state, type) {
    state.type = type;
  },
  // 修改错误码
  setErrorCode(state, errorCode) {
    state.errorCode = errorCode;
  },
  // 根据当前的运势类型type，修改对应的运势类型数据
  setData(state, data) {
    state[state.type] = data;
  }
};