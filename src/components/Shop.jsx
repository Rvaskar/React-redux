import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { addCount, minusCount } from './../state/action/countAction';

const Shop = () => {

    const dispatch = useDispatch()
    // console.log(dispatch)
    const balance = useSelector(state=>state.amount)
    const number = useSelector(state => state.number)
  
    // const actions =bindActionCreators(actionCreators,dispatch)
    const {withdrawMoney, depositMoney,resetMoney} =bindActionCreators(actionCreators,dispatch)
    // const action = bindActionCreators(actionCreators,dispatch)
    // console.log('actionCreators',actionCreators)
    const action = bindActionCreators({ addCount, minusCount },dispatch)
    // console.log("action",action)
    
  return (
    <div>
      <h1>Deposit withdraw money</h1>
      {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      update Money
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
      {/* <button className="btn btn-primary mx-2" onClick={()=>{actions.withdrawMoney(100)}}>-</button>
      update Money
      <button className="btn btn-primary mx-2" onClick={()=>{actions.depositMoney(100)}}>+</button> */}

      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
      update Money/ balance: {balance}
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
      <button className="btn btn-primary mx-2" onClick={()=>{resetMoney(0)}}>reset</button>

      <div>
      <button className="btn btn-primary mx-2" onClick={()=>{action.minusCount(1)}}>-</button>
        count state : {number}
        <button className="btn btn-primary mx-2" onClick={()=>{action.addCount(1)}}>+</button>
      </div>
    </div>
  );
};

export default Shop;
