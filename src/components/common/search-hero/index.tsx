import React from 'react';

import { Button, Form, Input } from 'antd';
import { useRouter } from 'next/router';

export default function SearchHero() {
  const router = useRouter();

  const onSearch = ({ search }: { search: string }) => {
    if (search) {
      router.push({
        pathname: '/search',
        query: {
          query: search,
        },
      });
    }
  };
  return (
    <div className="hero common-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Form onFinish={onSearch}>
              <div className="top-search">
                <Form.Item name="search">
                  <Input placeholder="Search for a movie, TV Show or celebrity that you are looking for" />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
