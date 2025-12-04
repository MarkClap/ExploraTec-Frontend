export interface Event {
    id: number;
    title: string;
    description: string;
    event_date: string;
    location: string;
    scene_id: number;
    modalidad: string;
    link: string;
    is_active: boolean;
    created_at: string;
}

export interface EventCreate {
    title: string;
    description: string;
    event_date: string;
    location: string;
    scene_id: number;
    modalidad: string;
    link: string;
}

export interface EventUpdate {
    title?: string;
    description?: string;
    event_date?: string;
    location?: string;
    scene_id?: number;
    modalidad?: string;
    link?: string;
    is_active?: boolean;
}

export interface EventsResponse {
    events: Event[];
    total: number;
    skip: number;
    limit: number;
}