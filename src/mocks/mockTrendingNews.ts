import { NewsCardProps } from '@store/NewsStore'
import { VerifiedNewsStatusEnum } from '@types'

export const mockTrendingNews: NewsCardProps[] = [
  {
    id: '1',
    title: 'Titulo 1 Lorem ipsum Lorem ipsum Lorem ipsum',
    description:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.',
    status: VerifiedNewsStatusEnum.REAL,
    link: 'https://example.com',
    date: new Date().toLocaleDateString(),
    isTrending: true,
  },
  {
    id: '2',
    title: 'Titulo 2',
    description:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.',
    status: VerifiedNewsStatusEnum.UNCERTAIN,
    date: new Date().toLocaleDateString(),
    isTrending: false,
  },
  {
    id: '3',
    title: 'Titulo 3 Lorem ipsum',
    description:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.',
    status: VerifiedNewsStatusEnum.FAKE,
    link: 'https://example.com',
    date: new Date().toLocaleDateString(),
    isTrending: true,
  },
  {
    id: '4',
    title: 'Titulo 4',
    description:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.',
    status: VerifiedNewsStatusEnum.REAL,
    link: 'https://example.com',
    date: new Date().toLocaleDateString(),
    isTrending: true,
  },
  {
    id: '5',
    title: 'Titulo 5',
    description:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.',
    status: VerifiedNewsStatusEnum.UNCERTAIN,
    date: new Date().toLocaleDateString(),
    isTrending: false,
  },
  {
    id: '6',
    title: 'Titulo 6',
    description:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.',
    status: VerifiedNewsStatusEnum.FAKE,
    link: 'https://example.com',
    date: new Date().toLocaleDateString(),
    isTrending: false,
  },
]
