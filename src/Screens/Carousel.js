/*import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Carousel() {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='cars'>



      <Card sx={{ maxWidth: 355, margin: 6 }}>
        <CardHeader
          title="SERVIÇOS"
        />
        <CardMedia
          component="img"
          height="200"
          image="https://www.religiondigital.org/2021/06/13/Migrantes_en_Brasil.png?"
          alt="Caminhos Sustentaves"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            É necessário criar e, portanto, nascemos como uma plataforma na qual os migrantes podem oferecer seus serviços e ter mais oportunidades de encontrar um emprego decente que lhes permita suprir suas necessidades e ter qualidade de vida.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>

          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 355, margin: 6 }}>
        <CardHeader
          title="EMPREENDEDORISMO"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://ultimasnoticias.com.ve/wp-content/uploads/2021/07/Emprendedores.jpg"

        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            O empreendedorismo é uma alternativa para as famílias de migrantes e, especialmente, para os membros da família que têm dificuldade de sair para trabalhar em dias inteiros porque são responsáveis pela casa e pelos filhos. O empreendedorismo é
            uma saída importante para a população migrante e refugiada no Brasil.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>

          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 355, margin: 6 }}>
        <CardHeader
          title="Estados piloto do aplicativo"
        />
        <CardMedia
          component="img"
          height="194"
          image="http://1.bp.blogspot.com/-V6-pNSwFzmY/Vp7Od1MACdI/AAAAAAAADts/7D7atM6czzA/s1600/POBREZA.jpg"

        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            O Brasil é um país muito grande. Portanto, a realocação dos migrantes tem sido a mesma em todo o país. Fazendo a análise econômica dos estados,
            vemos que as áreas mais sensíveis e vulneráveis são as do NORDESTE.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>


          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 355, margin: 6 }}>
        <CardHeader
          title="Equipe de desenvolvimento"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://th.bing.com/th/id/OIP.YodJtwIRg6hTBND7QB5h7AHaFi?pid=ImgDet&rs=1"

        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            A equipe de trabalho, nessa aplicação, colocou em prática o conhecimento adquirido com o treinamento recebido no TOTI, demonstrando o quanto foi importante para nós o treinamento recebido que nos permitiu ver uma
            luz no caminho da migração com uma reconversão em nosso conhecimento.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>

          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 355, margin: 6 }}>
        <CardHeader
          title="Se inscrever"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://th.bing.com/th/id/OIP.9rL-kTb9MoUJsNJOf5L6ywHaHa?pid=ImgDet&rs=1"

        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Em nossa seção de registro, você pode registrar migrantes e/ou
            refugiados nas áreas de atenção que nossa plataforma oferece, como Empregabilidade, Empreendedorismo e seus Serviços e Produtos.Empregador: Não apenas o migrante ou refugiado pode se registrar, mas também as empresas que oferecem serviços ou demandam produtos podem se registrar,
            e nossa plataforma servirá como um elo entre as partes interessadas.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>



          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 355, margin: 6 }}>
        <CardHeader
          title="ODS"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://thenewskyline.com/wp-content/uploads/2020/09/Los-ODS-y-los-tres-pilares-1536x898.png"

        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Os ODS são muito importantes para o nosso trabalho. Não apenas contemplamos o Objetivo 8 destinado a desenvolvê-lo, mas indiretamente incluímos outros como redução da pobreza, desigualdade zero. Melhorando a renda das pessoas,
            melhoramos a qualidade de vida delas e esse é o nosso objetivo.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>

          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 355, margin: 6 }}>
        <CardHeader
          title="LOJA VIRTUAL DE SERVIÇOS"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://maesquetrabalhamemcasa.com/wp-content/uploads/2017/08/loja-virtual-negocio-proprio.jpg"

        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            As empresas de Serviços terão a oportunidade de se dar a conhecer e, assim, oferecer a sua
            variedade de serviços às pessoas interessadas
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>

          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 355, margin: 6 }}>
        <CardHeader
          title="LOJA VIRTUAL DE EMPREENDEDORES"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://th.bing.com/th/id/OIP.4ScMJZUkLJYryGFEkAmGdAHaE8?pid=ImgDet&rs=1"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Em nossa loja virtual conectamos os consumidores com os produtos de nossos empreendedores e através de meios diretos eles fazem suas consultas e compras.
            Nossa plataforma não vende apenas informa onde comprar e onde o empreendedor está localizado d e produtos e os dados do empreendedor.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>


          </CardContent>
        </Collapse>
      </Card>

    </div>
  );
}++*/