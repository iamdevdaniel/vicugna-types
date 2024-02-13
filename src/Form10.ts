export type Form10Header = {
    id?: number,
    creationDate?: string,
    department: string,
    regional: string,
    community: string,
    captureSite: string,
    latitude: string,
    longitude: string,
    captureDate: string,
    herdingAttempts: string,
    authorizationCode: string,
}

export type Form10Entry = {
    sex: 'Macho' | 'Hembra' | '',
    age: 'Cría' | 'Juvenil' | 'Adulto' | '',
    weight: string,
    woolLength: string,
    physicalCondition: 'Mala' | 'Regular' | 'Buena' | '',
    pregnancyStatus: 'No' | 'Si' | 'Si, último tercio' | '',
    externalParasites: ('Garrapatas' | 'Piojos')[]
    mangeSeverity: 'Leve' | 'Moderado' | 'Severo' | '',
    dandruff: boolean,
    canShareWool: boolean,
    isAlive: boolean,
    observations: string,
}
