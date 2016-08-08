{/* 子组件注释，加上 {} 花括号 */}
var classNames = ['class3','class4'];
var domTest2 = <h1 
	/* 组件属性注释 */
	className={"class1 class2"} data-custom-attr="customAttr" aria-hidden={true}>test class
  <span className={classNames.join(' ')} style={{color:'red',background:'#000000'}}>and style</span>
  </h1>;
ReactDOM.render(
	domTest2,
	document.getElementById('test2')
);