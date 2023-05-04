// Function to convert usd to ksm and return the track and amount in ksm
type TrackKsm = {
  Ksm: number;
  Track: string;
  TrackNumber: number;
};

// Convert to KSM
const convert = (usd: number) => usd * 0.03;

// Track Hardcoded<=
const Tracks = {
    SmallSpender: 2000,
    MediumSpender: 5000,
    BigSpender: 10000
}

export const getTrackKsm = (amount: number): TrackKsm => {

    const ksm = convert(amount);
    let track = "";
    let trackNumber:number =0;
    // Compute the track
    if(ksm <= Tracks.SmallSpender){
        track = "SmallSpender";
        trackNumber = 32;

    }else if(ksm <= Tracks.MediumSpender){
        track = "MediumSpender";
        trackNumber = 33;
    }else if(ksm <= Tracks.BigSpender){
        track = "BigSpender";
        trackNumber= 34;
    }

    const tt = {
        Ksm: ksm,
        Track: track,
        TrackNumber: trackNumber
    };
    return tt
};

const refBlockNo = 17767047;
const refUnixTime = 1683214032000;
const BlockTime = 6; // In seconds

// Date to blocknumber
const convertToBlockNumber = (date: string) =>{
    // 24-Nov-2023
    // Parse the string 
  
    // Library to convert date to unix
    const unixTime = Date.parse(date)
    // A reference blocknumber and check the corresponding unix time 
    // Difference on our current unix to ref unix
    const diffUnix = unixTime - refUnixTime;
    // Compute blocks to be produced;
    const blocks = Math.ceil(diffUnix/ BlockTime) // Must return a whole number
    // return the blocknumber  
    return blocks
}