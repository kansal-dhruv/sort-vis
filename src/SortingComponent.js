import React, {Component} from "react";
import './Sorting.css'
import {mergeSort} from "./Sorting Algos/MergeSort";
import {HeapSort} from "./Sorting Algos/HeapSort";
import {BubbleSort} from "./Sorting Algos/bubbleSort";
//npm run deploy - push to github pages
class SortingComponent extends Component{
    constructor() {
        super(1);
        this.state={
            arr: [],
            size:200,
            speed: 10,
        }
    }
    componentDidMount() {
        const arr=this.getRandomArray(this.state.size);
        this.setState({arr});
        document.querySelector("input").value=this.state.size;
        }
    handleChange(){
        // console.log(document.querySelector("input").value);
        this.setState({size: document.querySelector("input").value,});
        this.generateNewArray();
    }
    generateNewArray(){
        const buttons=document.getElementsByClassName('btn');
        for(let i=0;i<buttons.length;i++)
        {
            buttons[i].disabled=false;
        }
        const arr=this.getRandomArray(this.state.size);
        this.setState({arr});
    }
    getRandomArray(size){
        let arr=[];
        for(let i=0;i<size;i++)
        {
            arr.push(Math.floor((Math.random() * 900) + 1));
        }
        console.log(arr);
        return arr;
    }
    animatemergeSort(arr){
        const buttons=document.getElementsByClassName('btn');
        for(let i=0;i<buttons.length;i++)
        {
            buttons[i].disabled=true;
        }
        const bars=document.getElementsByClassName("element");
        const speed=10;
        let l=0;
        for(let i=0;i<arr.length;i=i+3)
        {
            let bar1=bars[arr[i][0]];
            let bar2=bars[arr[i][1]];
            setTimeout(()=>{
                bar1.style.backgroundColor='white';
                bar2.style.backgroundColor='white';
            },i*speed);
            bar1=bars[arr[i+1][0]];
            bar2=bars[arr[i+1][1]];
            setTimeout(()=>{
                bar1.style.backgroundColor='white';
                bar2.style.backgroundColor='white';
            },(i+1)*speed);
            setTimeout(()=>{

               bar1=bars[arr[i+2][0]];
               let h=[arr[i+2][1]];
               bar1.style.height=`${h}px`;
               },(i+2)*speed);
            l=i;
        }
        setTimeout(()=>{
                buttons[0].disabled=false;
        },(l+1)*speed);

    }
    animateHeapSort(lul){
        const buttons=document.getElementsByClassName('btn');
        for(let i=0;i<buttons.length;i++)
        {
            buttons[i].disabled=true;
        }
        const arr=lul[1];
        const bars=document.getElementsByClassName("element");
        const speed=10;
        let l=0;
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i][0]===-1)
            {
                let bar1=bars[arr[i][1]];
                let bar2=bars[arr[i][2]];
                setTimeout(()=>{
                    bar1.style.height=`${arr[i][3]}px`;
                    bar2.style.height=`${arr[i][4]}px`;
                },(i )*speed);
            }
            l=i;
        }
        setTimeout(()=> {
            buttons[0].disabled=false;
        },(l+1)*speed);
    }
    animateBubbleSort(arr){
        const buttons=document.getElementsByClassName('btn');
        for(let i=0;i<buttons.length;i++)
        {
            buttons[i].disabled=true;
        }
        const bars=document.getElementsByClassName("element");
        console.log(bars);
        const speed=10;
        let l=0;
        for(let i=0;i<arr.length;i++)
        {
                let bar1=bars[arr[i][0]];
                let bar2=bars[arr[i][1]];
                // console.log(bar1);
                setTimeout(()=>{
                    bar1.style.height=`${arr[i][2]}px`;
                    bar2.style.height=`${arr[i][3]}px`;
                },(i )*speed);
            l=i;
        }
        setTimeout(()=> {
            buttons[0].disabled=false;
        },(l+1)*speed);
    }
    handleMergeSort(arr){
        let lul=[[]];
        lul=mergeSort(arr);
        this.animatemergeSort(lul);
    }

    handleHeapSort(arr){
        let lul=[[]];
        lul=HeapSort(arr);
        this.animateHeapSort(lul);
        // console.log(lul);
    }
    handleBubbleSort(arr){
        let lul=[[]];
        lul=BubbleSort(arr);
        console.log(lul);
        this.animateBubbleSort(lul);
    }
    render() {
        return(
            <div>
        <div className="container">
        {this.state.arr.map((ele)=>{
        return(
            <div className="element" style={{height: `${ele}px`}}> </div>
        );}
        )
        }
        </div>
        <button className="btn" onClick={()=>this.generateNewArray()}>Generate New Array</button>
        <button className="btn" onClick={()=>this.handleMergeSort(this.state.arr)}>Merge Sort</button>
        <button className="btn" onClick={()=>this.handleHeapSort(this.state.arr)}>Heap Sort</button>
        <button className="btn" onClick={()=>this.handleBubbleSort(this.state.arr)}>Bubble Sort</button>
        <button >Temporary</button>
        <div style={{color:'white',display:'inline',border:'1px solid white'}}><input className="btn" id="changeSize" type="range" min="50" max="200" style={{background: 'white', cursor: 'pointer'}} onChange={()=>this.handleChange()} />
            {this.state.size}</div>
        </div>
        )
    }
}
export default SortingComponent;