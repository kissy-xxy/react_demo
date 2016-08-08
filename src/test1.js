var HelloWorld = React.createClass({
	render: function() {
		return (
			<p>你好，<span>{this.props.name}</span><br/>
				现在的时间是：{this.props.date.toTimeString()}
			</p>
		);
	}
});
setInterval(function(){
	ReactDOM.render(
		<HelloWorld date={new Date()} name="xxy"/>,
		document.getElementById('test1')
	);
},1000);