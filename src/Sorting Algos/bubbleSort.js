const animations=[];
export function BubbleSort(arr)
{
    let length=arr.length-1;
    while(length!==0)
    {
        helper(arr,0,length);
        length--;
    }
    console.log(arr);
    return animations;
}
function helper(arr,start,end)
{
    for(let i=start;i<end;i++)
    {
        if(arr[i]>arr[i+1])
            swap(arr,i,i+1);
    }
}
function swap(arr,a,b)
{
    animations.push([a,b,arr[b],arr[a]]);
    let temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}