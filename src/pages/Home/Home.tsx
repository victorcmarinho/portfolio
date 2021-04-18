import React from 'react';

import { useQuery } from '@apollo/client';
import { Card } from 'components/Card';
import { Footer } from 'components/Footer';
import { Text } from 'components/Text';
import { Title } from 'components/Title';
import { IGitInfos } from 'models/gitInfosModel';
import { GET_GIT_INFOS } from 'services/queryGitHub';

import * as S from './styles';

const Home: React.FC = () => {
  const { data } = useQuery<IGitInfos>(GET_GIT_INFOS);

  return (
    <S.Container>
      <S.LeftSide>
        <section>
          <Title>Oi, Eu sou Victor Marinho.</Title>
          <Text>{data?.viewer.name}</Text>
        </section>
        <Footer img={data?.viewer.avatarUrl} />
      </S.LeftSide>
      <S.RightSide>
        {data?.viewer.repositories.edges.map((repos, i) => (
          <Card
            key={repos.node.name + i}
            title={repos.node.name}
            labels={repos.node.languages.edges
              .map(label => label.node.name)
              .join(', ')}
            stars={+repos.node.stargazerCount}
            text={repos.node.description}
            url={repos.node.url}
          />
        ))}
        <Text>Veja mais em meu github</Text>
      </S.RightSide>
    </S.Container>
  );
};

export default Home;
