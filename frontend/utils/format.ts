export const formatAddress = (address:string|undefined) => {
   if (address!== undefined) {
    const first = address.slice(0, 7);
    const last = address.slice(address.length-6)
    return `${first}...${last}`;
   }
}