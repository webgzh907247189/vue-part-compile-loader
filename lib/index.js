// const loadUtils = require('loader-utils')

function cusLoader(source) {
  // this.cacheable && this.cacheable()
  return source;
}

// 利用pitch 进行 熔断
// 不需要渲染的 vue 组件 直接熔断
cusLoader.pitch = function (remainRequest, precedingRequest, data) {
  return `<template>
      <div style="color: red; position: fixed; top: 20px; z-index: 99999;"> 
        无需渲染的组件，该组件被劫持, 如需访问该页面url，请修改配置
      </div>
    </template>`;
};

module.exports = cusLoader;
