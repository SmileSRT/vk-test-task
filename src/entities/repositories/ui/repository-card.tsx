import { Avatar, Card, Flex } from 'antd';
import type { IRepository } from '../types';
import {
  BarChartOutlined,
  GithubOutlined,
  StarOutlined,
} from '@ant-design/icons';
import type { FC } from 'react';

const CardTitle: FC<{ title: string; href: string }> = ({ title, href }) => (
  <Flex gap={5} align="center">
    <GithubOutlined />
    <a href={href} target="_blank">
      {title}
    </a>
  </Flex>
);

const CardExtra: FC<{ stars: number; forks: number }> = ({ stars, forks }) => (
  <Flex align="center" gap={20}>
    <Flex gap={5}>
      <StarOutlined />
      {stars}
    </Flex>
    <Flex gap={5}>
      <BarChartOutlined />
      {forks}
    </Flex>
  </Flex>
);

const RepositoryCard: FC<IRepository> = ({
  full_name,
  owner,
  description,
  stargazers_count,
  forks_count,
  html_url,
}) => {
  return (
    <Card
      title={<CardTitle title={full_name} href={html_url} />}
      extra={<CardExtra stars={stargazers_count} forks={forks_count} />}
    >
      <Card.Meta
        avatar={<Avatar src={owner.avatar_url} />}
        title={owner.login}
        description={description}
      />
    </Card>
  );
};

export default RepositoryCard;
