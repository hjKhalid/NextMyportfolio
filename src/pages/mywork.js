
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import Image from 'next/image'

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 1540, height: 710 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Projects</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Image
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            width='758'
            height='400'
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}

            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
              <Link href={item.git}>  <GitHubIcon /></Link>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/Duniya_bhar_ki_khabar.gif',
    title: 'Duniya_bhar_ki_khabar',
    author: '@Khaliid_hussain',
    git:'https://github.com/hjKhalid/Duniya-bhar-ki-khabr',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '/Keep app.gif',
    title: 'Keep app',
    author: '@Khalid Huassain',
    git:'https://github.com/hjKhalid/Keep',

  },
  {
    img: '/WeatherApp.gif',
    title: 'WeatherApp',
    author: '@khalid Hussain',
    git:'https://github.com/hjKhalid/ReactWeatherApp',
  },
  {
    img: '/text debugger.gif',
    title: 'text debugger',
    author: '@Khalid hussain',
    git:'https://github.com/hjKhalid/debugertext',
    cols: 2,
  },
  {
    img: '/animation.gif',
    title: 'Animation',
    author: '@Khalid Hussain',
    git:'https://github.com/hjKhalid/animation',
    cols: 2,
  },
  {
    img: '/DrumKit.gif',
    title: 'DrumKit',
    author: '@Khalid Hussain',
    git:'https://github.com/hjKhalid/DrumKitMadeByKhalid',
    rows: 2,
    cols: 2,
    featured: true,
  },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     author: '@tjdragotta',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     author: '@katie_wasserman',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//     cols: 2,
//   },
];