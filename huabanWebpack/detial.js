/**
 * Created by ANN on 2017/7/22.
 */

var React = require('react');
var ReactDOM = require('react-dom');


class Index extends React.Component{
    constructor(){
        super()
        var t = window.location.href.split("?")[1].split("=")[1]
        console.log(t)




    }
    componentDidMount(){
            fetch('/api/user/newsDetail', {
                method: 'post',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body: 'foo=bar&favColor=blue&password=easytoguess'
            })
            .then(response => response.json())
            .then(function (data) {
                console.log(data);
            })
            .catch(function (error) {
                console.log('Request failed', error);
            })


    }
    render(){

        return(
            <div className="block">
              

            </div>

        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('detail'));