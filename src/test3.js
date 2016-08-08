console.log(HelloWorld)
var count = 0;
var style = {
	fontSize : '30px',
	color : 'green',
	border : '1px solid grey'
};
var HelloWorld = React.createClass({
  /* 
  初始化阶段 
  */
	getDefaultProps : function(){
		console.log('只调用一次，实例间共享，若有传，被覆盖');
		return {name : 'XXY'}
	},
	getInitialState : function(){
		console.log('初始化每个实例特有的状态');
		return {myCount : count = count +1,
						ready : "false"
		};//must return an object or null
	},
	componentWillMount : function(){
		console.log('render前最后一次修改状态的机会');
		this.setState({
			ready : "true"
		});
	},
	render:function(){
		console.log('只能访问this.props和this.state只有一个顶层组件，不允许修改状态和DOM输出');
		return <p style={style} ref="testRefs">Hello {this.props.name ? this.props.name : 'World'} <span ref="spanRef">spanRef</span></p>;//A valid ReactComponent must be returned*/
	},
	componentDidMount:function(){
		console.log('成功render并渲染完成后触发，可以修改DOM');
	},
	/* 
	运行阶段
	 */
	componentWillReceiveProps: function(){
		console.log('父组件修改属性触发，可以修改新属性及状态');
	},
	shouldComponentUpdate: function(){
		console.log('返回false会阻止render重新渲染');
		return true;
	},
	componentWillUpdate:function(){
		console.log('不能修改属性和状态');
	},
	componentDidUpdate:function(){
		console.log('可以修改DOM');
	},
	/* 销毁阶段 */
	componentWillUnMount: function(){
		console.log('delete')
	}
});

var HelloWorld1 = React.createClass({
	getInitialState : function(){
		return {
			name : 'XXY1'
		};
	},
	handleChange: function(event){
		this.setState({name: event.target.value});
	},
	render: function(){
		return <div>
			<HelloWorld name={this.state.name} ref="hw"></HelloWorld>
			<input onChange={this.handleChange} value={this.state.name}/>
		</div>
	},
	componentDidMount: function(){
		console.log('parent finish')
	}
});

ReactDOM.render(
	<HelloWorld1></HelloWorld1>,
	document.getElementById('test3')
)
