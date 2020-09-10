let animations=[];
export function SelectionSort(arr)
{
    animations=[];
    let l=arr.length;
    while(l--)
    {
        let maxi=helper(arr,l);
        swap(arr,maxi,l);
    }
    return animations;
}
function helper(arr,len)
{
    if(len===0)
        return 0;
    let max=0;
    for(let i=0;i<=len;i++)
    {
        if(arr[i]>arr[max])
            max=i;
    }
    return max;
}
export function swap(arr,a,b)
{
    animations.push([a,b,arr[b],arr[a]]);
    let temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}