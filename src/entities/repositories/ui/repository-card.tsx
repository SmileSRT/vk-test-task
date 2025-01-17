import { Avatar, Card, Flex, Input } from 'antd';
import type { IRepository } from '../types';
import {
  BarChartOutlined,
  DeleteOutlined,
  EditOutlined,
  GithubOutlined,
  SaveOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { useState, type FC } from 'react';
import { useStores } from '../../../app/store-provider';

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

const EditableField: FC<{
  value: string;
  onChange: (value: string) => void;
  isEditMode?: boolean;
}> = ({ value, isEditMode, onChange }) => {
  if (isEditMode) {
    return <Input value={value} onChange={e => onChange(e.target.value)} />;
  }

  return <>{value}</>;
};

const EditAction: FC<{
  isEditMode?: boolean;
  onSave: () => void;
  onChangeEditMode: () => void;
}> = ({ isEditMode, onChangeEditMode, onSave }) => {
  const saveHandler = () => {
    onSave();
    onChangeEditMode();
  };

  if (isEditMode) {
    return <SaveOutlined onClick={saveHandler} />;
  }

  return <EditOutlined onClick={onChangeEditMode} />;
};

const RepositoryCard: FC<IRepository> = ({
  id,
  full_name,
  owner,
  description,
  stargazers_count,
  forks_count,
  html_url,
}) => {
  const [metaTitle, setMetaTitle] = useState<string>(owner.login);
  const [metaDescription, setMetaDescription] = useState<string>(description);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const { repositoriesStore } = useStores();
  const { deleteItem, saveItem } = repositoriesStore;

  return (
    <Card
      title={<CardTitle title={full_name} href={html_url} />}
      extra={<CardExtra stars={stargazers_count} forks={forks_count} />}
      actions={[
        <EditAction
          key="edit"
          onChangeEditMode={() => setIsEditMode(!isEditMode)}
          onSave={() => saveItem(id, metaTitle, metaDescription)}
          isEditMode={isEditMode}
        />,
        <DeleteOutlined key="delete" onClick={() => deleteItem(id)} />,
      ]}
    >
      <Card.Meta
        avatar={<Avatar src={owner.avatar_url} />}
        title={
          <EditableField
            value={metaTitle}
            onChange={setMetaTitle}
            isEditMode={isEditMode}
          />
        }
        description={
          <EditableField
            value={metaDescription}
            onChange={setMetaDescription}
            isEditMode={isEditMode}
          />
        }
      />
    </Card>
  );
};

export default RepositoryCard;
