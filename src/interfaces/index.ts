
export interface IApiPlayers{
    api:{
        players:any
    }
}
export interface IPlayer{
    player_id: number;
    player_name: string;
    firstname: string;
    lastname: string;
    number?: any;
    position: string;
    age: number;
    birth_date: string;
    birth_place: string;
    birth_country: string;
    nationality: string;
    height: string;
    weight: string;
}
export interface IShortPlayer{
    player_id: number;
    player_name:string
    age: number;
    nationality: string;
}

export interface IInput {
    id:string,
    type:string,
    label:string,
    placeholder?: string,
    validator?: (name:any) => {} | undefined
    radio?:ITagInputArray
}

export interface ICircle {
    class:string
}

export interface ITemplateField{
    title?: string,
    content: any
}

export interface IPanel{
    header?:any,
    title:string,
    content:any,
    color?:string
}

export interface IFieldset{
    legend:string,
    content1: any,
    content2: any
}
export interface ITagInputArray{
    items:ITagInput[]
}

export interface ITagInput{
    value:string,
    label:string
}
