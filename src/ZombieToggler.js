import React,{Component,Fragment} from 'react'


class ZombieToggler extends Component  {
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
        this.state = { list: [
                {
                    "name":"head",
                    "title":"Head",
                    "max":8
                },{
                    "name":"eye",
                    "title":"Eye",
                    "max":11
                },{
                    "name":"shirt",
                    "title":"Shirt",
                    "max":6
                },{
                    "name":"skin",
                    "title":"Skin",
                    "max":360
                },{
                    "name":"eye_color",
                    "title":"Eye Color",
                    "max":360
                },{
                    "name":"color",
                    "title":"Shirt Color",
                    "max":360
                }
            ],inputValue:[]
        }
    }
    handleChange(event){
        var id = event.target.id.replace(/_select/,"")
        var _list = this.state.inputValue
        _list[id] = event.target.value;
        this.setState({
            inputValue:_list
        })
        this.props.handleChange(event);
    }
    render() {
        return (
            <div  className="zombie-toggle col mt-lg-5 pt-4" id="zombie-toggle">
                <fieldset id="zombie-toggler"  className="form-group col mt-lg-5 pt-lg-5" >
                    <div >
                        {this.state.list.map((item,index)=>{
                            return(<Fragment key={index}>
                                <label>{item.title}:<code></code></label>
                                <input  type="range" min="1" max={item.max} className="custom-range" id={`${item.name}_select`} value={this.state.inputValue[item.name]||1}  onChange={this.handleChange}/>
                                </Fragment>)
                        })}            
                    </div>
                </fieldset>
            </div>
        );
    }
}

export default ZombieToggler;
