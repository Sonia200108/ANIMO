export class Auth0User {
    created_at: string
    email: string
    email_verified: boolean
    family_name: string
    given_name: string
    identities: Identity[]
    locale: string
    name: string
    nickname: string
    picture: string
    updated_at: string
    user_id: string
    last_login: string
    last_ip: string
    logins_count: number

    constructor(created_at: string, email: string, email_verified: boolean, family_name: string, given_name: string, identities: Identity[], locale: string, name: string, nickname: string, picture: string, updated_at: string, user_id: string, last_login: string, last_ip: string, logins_count: number) {
        this.created_at = created_at
        this.email = email
        this.email_verified = email_verified
        this.family_name = family_name
        this.given_name = given_name
        this.identities = identities
        this.locale = locale
        this.name = name
        this.nickname = nickname
        this.picture = picture
        this.updated_at = updated_at
        this.user_id = user_id
        this.last_login = last_login
        this.last_ip = last_ip
        this.logins_count = logins_count
        }

  }
  
  export class Identity {
    provider: string
    access_token: string
    expires_in: number
    user_id: string
    connection: string
    isSocial: boolean
    

    constructor(provider: string, access_token: string, expires_in: number, user_id: string, connection: string, isSocial: boolean) {
        this.provider = provider
        this.access_token = access_token
        this.expires_in = expires_in
        this.user_id = user_id
        this.connection = connection
        this.isSocial = isSocial
    }
  }

