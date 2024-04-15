export interface Event {
  '@attributes': Attributes
  events: EventElement[]
}

export interface Attributes {
  count: number
}

export interface EventElement {
  id: number
  url: string
  url_slug: string
  name: string
  presented_by: string
  description: string
  datetime_start: Date
  datetime_end: Date
  location_summary: string
  address: string
  is_free: boolean
  is_featured: boolean
  is_cancelled: boolean
  restrictions: Restrictions
  point: Point
  username: string
  timezone: Timezone
  location: Location
  category: Category
  datetime_summary: string
  external_reference: null
  video: null | string
  is_sold_out: boolean
  sessions: Sessions
  ticket_types: TicketTypes
  artists: Artists
  web_sites: WebSites
  images: Images
}

export interface Artists {
  '@attributes': Attributes
  artists: any[]
}

export interface Category {
  id: number
  name: string
  url_slug: string
  parent_id: number
  count_current_events: number
}

export interface Images {
  '@attributes': Attributes
  images: Image[]
}

export interface Image {
  id: number | null
  is_primary: boolean
  original_url: string
  transforms: Transforms
}

export interface Transforms {
  '@attributes': Attributes
  transforms: Transform[]
}

export interface Transform {
  transformation_id: number
  url: string
  width: number
  height: number
}

export interface Location {
  id: number
  name: string
  summary: string
  url_slug: string
  is_venue: boolean
  count_current_events: number
  description: string
  images: Images
  point: Point
}

export interface Point {
  lat: number
  lng: number
}

export enum Restrictions {
  AdultsOnly = 'Adults Only',
  AllAges = 'All Ages',
  R18 = 'R18',
}

export interface Sessions {
  '@attributes': Attributes
  sessions: Session[]
}

export interface Session {
  id: number
  timezone: Timezone
  datetime_start: Date
  datetime_end: Date
  is_cancelled: boolean
  is_ticketed: boolean
  is_currently_onsale: boolean | null
  is_for_tickets_only: boolean | null
  ticketing_label: null
  offsale_at: Date | null
  session_tickets?: SessionTickets
  datetime_summary: string
}

export interface SessionTickets {
  '@attributes': Attributes
  session_tickets: TicketType[]
}

export interface TicketType {
  id: number
  name: Name
  price: string
  is_ticketed: boolean
  description: null | string
  minimum_purchase_quantity: number | null
  is_addon: boolean | null
  onsale_at: null
  offsale_at: null
  is_sold_out?: boolean
  is_limited_remaining?: boolean
}

export enum Name {
  GeneralAdmission = 'General Admission',
  GeneralAdmission10PeopleOrAbove = 'General Admission - 10 people or above ',
  GeneralAdmission1EntryIntoTheMeatRaffle = 'General Admission + 1 entry into the meat raffle!',
  GeneralAdmission3EntriesIntoTheMeatRaffle = 'General Admission + 3 entries into the meat raffle!',
  GeneralAdmission4PeopleAndAbove = 'General Admission - 4 People and Above',
  GeneralAdmission6PeopleOrAbove = 'General Admission - 6 people or above',
  Include1Clothing1Keychain1Dinner = ' Include 1 clothing 1 keychain 1dinner',
  Include1Dinner3ChoicesOfMerchandise3Keychain = 'Include 1 dinner, 3 choices of merchandise, 3 keychain ',
  SchoolHolidayDealForUpTo8Pp = 'School Holiday Deal for up to 8pp',
  SeniorOrStudent = 'Senior or Student ',
  SpecialPreviewPriceOf7ForSaturday13ThApril = 'Special preview price of $7 for Saturday 13th April',
}

export enum Timezone {
  PacificAuckland = 'Pacific/Auckland',
}

export interface TicketTypes {
  '@attributes': Attributes
  ticket_types: TicketType[]
}

export interface WebSites {
  '@attributes': Attributes
  web_sites: WebSite[]
}

export interface WebSite {
  url: string
  name: string
}
