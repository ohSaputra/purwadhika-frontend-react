import React, { Component } from 'react'
import './calculator.css'

class Calculator extends Component {

  state = {
    val: 0,
    screen: '',
    total: 0,
    showTotal: false,
  }

  render() {
    const { title, buttonName } = this.props
    const { val, screen } = this.state

    return (
      <div className='calculator'>
        <div className='container'>
          <h2>{ title }</h2>
          {/* <div>{ screen }</div> */}
          <input
            className = 'form-control'
            type = 'text'
            onChange = {this.handleChange}
            value = {this.state.val}
            />
          <div className='calculator-operation'>
            { this.renderOperator() }
          </div>
          <button
            className='btn btn-secondary'
            onClick = {this.handleTotal} >{ buttonName }</button>
        </div>
      </div>
    )
  }

  renderOperator = () => {
    const { tambahOp, kurangOp } = this.props

    return (
      <div>
        { tambahOp &&
          <button
            className='btn btn-secondary'
            onClick={this.handleTambah}>+</button>
        }

        { kurangOp &&
          <button className='btn btn-secondary'>-</button>
        }
      </div>
    )
  }

  handleChange = event => this.setState({ val: event.target.value })

  handleTambah = () => {
    const { val, screen, total, showTotal } = this.state

    // if (screen)
    //   this.setState({ screen: `${screen} + ${val} ` })
    // else
    //   this.setState({ screen: `${val} ` })

    if (showTotal)
      this.setState({
        val: 0,
        total: parseInt(val),
        showTotal: false})
    else
      this.setState({ val: 0, total: parseInt(total) + parseInt(val) })
  }

  handleTotal = () => {
    const {total, screen} = this.state

    // this.setState({ val: total, screen: `${screen} = ${total}` })
    this.setState({ val: total, showTotal: true })
  }
}

export default Calculator