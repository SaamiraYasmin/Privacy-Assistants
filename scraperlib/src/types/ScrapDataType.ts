import * as Types from '../types';

enum ScrapDataType{
    Link = 1,
    Voice,
    Mixed,
    Location
}

const TypeToClass= new Map<number, any>([
    [ScrapDataType.Link, Types.LinkData],
    [ScrapDataType.Voice, Types.VoiceData],
    [ScrapDataType.Mixed, Types.MixedScrapData],
    [ScrapDataType.Location, Types.LocationData]
])

export {ScrapDataType, TypeToClass};