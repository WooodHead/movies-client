import React from 'react';

import { Rate, Skeleton } from 'antd';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { AiFillHeart } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';

import LazyLoadImage from '@/components/common/images/lazy-load-image';
import { Container } from '@/components/common/layouts';
import SearchHero from '@/components/common/search-hero';
import { useMovieDetail } from '@/hooks/services/useMovieDetail';

export default function MovieDetail() {
  const { query } = useRouter();
  const id = query?.id as string;
  const { data: movieDetail, isLoading } = useMovieDetail(id);
  return (
    <main>
      <SearchHero />

      <Container>
        <>
          {isLoading ? (
            <Skeleton
              style={{
                background: 'rgba(248, 248, 248, 0.4);',
                marginBottom: 50,
              }}
              active
              avatar
              paragraph={{ rows: 18 }}
            />
          ) : (
            <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in' }} className="movie-single movie_single">
              <div className="row ipad-width2">
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="movie-img sticky-sb">
                    <LazyLoadImage src={movieDetail?.poster_path || ''} alt={movieDetail?.title || ''} />
                    {/* <img src="/images/uploads/movie-single.jpg" alt="" /> */}
                    <div className="movie-btn">
                      <div className="btn-transform transform-vertical red">
                        <div>
                          <a href="#" className="item item-1 redbtn">
                            {' '}
                            <AiFillHeart color="#dd003f" size={18} /> Watch Trailer
                          </a>
                        </div>
                        <div>
                          <a className="item item-2 redbtn fancybox-media hvr-grow">
                            <i className="ion-play"></i>
                          </a>
                        </div>
                      </div>
                      <div className="btn-transform transform-vertical">
                        <div>
                          <a href="#" className="item item-1 yellowbtn">
                            {' '}
                            <i className="ion-card"></i> Buy ticket
                          </a>
                        </div>
                        <div>
                          <a href="#" className="item item-2 yellowbtn">
                            <i className="ion-card"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-sm-12 col-xs-12">
                  <div className="movie-single-ct main-content">
                    <h1 className="bd-hd">
                      {movieDetail?.title} <span>{dayjs(movieDetail?.release_date).year()}</span>
                    </h1>
                    <div className="social-btn">
                      <a href="#" className="parent-btn">
                        <span>
                          <AiFillHeart color="#dd003f" size={'23'} />
                        </span>
                        Add to Favorite
                      </a>
                      <div className="hover-bnt">
                        <a href="#" className="parent-btn">
                          <span>
                            <BsShareFill color="#dd003f" size={'16'} />
                          </span>
                          share
                        </a>
                      </div>
                    </div>
                    <div className="movie-rate">
                      <div className="rate">
                        <p>
                          <span>{movieDetail?.vote_average}</span> /10
                          <br />
                        </p>
                      </div>
                      <div className="rate-star">
                        Rate This Movie: <Rate disabled style={{ marginLeft: 10 }} value={movieDetail?.vote_average} count={10} />
                      </div>
                    </div>
                    <h3>OVERVIEW</h3>
                    <p>{movieDetail?.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      </Container>
    </main>
  );
}
