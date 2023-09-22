import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import masaladosa from '../Assests/Masala-Dosa1.webp'
import thali from '../Assests/thali.jpg'
import food2 from "../Assests/food2.jpg"
import chole from "../Assests/cholebhature.jpg"
import misal from "../Assests/misalpav.jpg"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const Item = () => {
    const classes = useStyles();
  return (
    <div className='my-[30px] mx-[170px] flex flex-wrap gap-[60px] '>
        {/* card 1 */}
         <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={masaladosa}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Masala Dosa
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          ₹ 120
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Ut dui sem, gravida eget leo at, imperdiet ornare augue. Mauris luctus, tellus a congue
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>


    {/* card 2 */}
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={thali}
          title="thali"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Masala Dosa
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          ₹ 120
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Ut dui sem, gravida eget leo at, imperdiet ornare augue. Mauris luctus, tellus a congue
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    {/* card 3 */}

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={food2}
          title="food2"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            matar Paneer combo
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          ₹ 120
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Ut dui sem, gravida eget leo at, imperdiet ornare augue. Mauris luctus, tellus a congue
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>


    {/* card 4 */}
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={misal}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            misal pav
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          ₹ 120
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Ut dui sem, gravida eget leo at, imperdiet ornare augue. Mauris luctus, tellus a congue
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    {/* card 5 */}
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={misal}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Chole Bhature
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          ₹ 120
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Ut dui sem, gravida eget leo at, imperdiet ornare augue. Mauris luctus, tellus a congue
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    {/* card 5 */}
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={misal}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            misal pav
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          ₹ 120
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Ut dui sem, gravida eget leo at, imperdiet ornare augue. Mauris luctus, tellus a congue
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    {/* card 6 */}
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={misal}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            misal pav
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          ₹ 120
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Ut dui sem, gravida eget leo at, imperdiet ornare augue. Mauris luctus, tellus a congue
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    {/* card 8 */}
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={misal}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            misal pav
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          ₹ 120
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Ut dui sem, gravida eget leo at, imperdiet ornare augue. Mauris luctus, tellus a congue
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    {/* card 9 */}

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={misal}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            misal pav
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          ₹ 120
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Ut dui sem, gravida eget leo at, imperdiet ornare augue. Mauris luctus, tellus a congue
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Item