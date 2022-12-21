import React from "react"

export interface ImgItem {
    link: string
    id: React.Key | null | undefined
    type: string
    is_album: boolean
    images?: {
        link: string
        id: React.Key | null | undefined
        type: string
        is_album: false
    }[]
}