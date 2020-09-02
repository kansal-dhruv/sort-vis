let len=0;
let animations=[];
export function HeapSort(arr)
{
    len=arr.length;
    let mid=Math.floor((arr.length-1)/2);
    for(let i=mid;i>=0;i--)
    {
        heapify(arr,i);
    }
    for(let i=arr.length-1;i>=0;i--)
    {
        swap(arr,0,i);
        len--;
        heapify(arr,0);
    }
    return [arr,animations];
}
function heapify(arr,idx)
{
    let l=2*idx +1;
    let r=2*idx +2;
    let max=idx;
    animations.push([idx,l,r]);
    if(l<len && arr[max]<arr[l])
    {
        max=l;
    }
    if(r<len && arr[max]<arr[r] )
    {
        max=r;
    }
    if(max!==idx)
    {
        swap(arr,max,idx);
        heapify(arr,max);
    }
}
function swap(arr,a,b)
{
    animations.push([-1,a,b,arr[b],arr[a]]);
    let temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}