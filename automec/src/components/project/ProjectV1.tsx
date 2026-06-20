import Isotope from 'isotope-layout';
import React, { useEffect, useRef, useState } from 'react';
import ProjectV1Data from '../../jsonData/project/ProjectV1Data.json';
import SingleProjectV1Item from './SingleProjectV1Item';
import { motion } from 'framer-motion';

const ProjectV1 = ({ partial = true }) => {
    const gridRef = useRef<HTMLDivElement | null>(null);
    const isoRef = useRef<Isotope | null>(null);
    const [activeKey, setActiveKey] = useState('all');

    const filters = [
        { label: 'All Project', key: 'all', filter: '*' },
        { label: 'Cleaning', key: 'cleaning', filter: '.cleaning' },
        { label: 'Repair', key: 'repair', filter: '.maintain, .repair' },
        { label: 'Maintain', key: 'maintain', filter: '.maintain' },
        { label: 'Fuel', key: 'fuel', filter: '.cleaning, .fuel' },
        { label: 'Break', key: 'break', filter: '.break, .fuel' },
    ];

    const waitForImages = () => {
        const images = Array.from(gridRef.current?.querySelectorAll('img') || []);
        return Promise.all(images.map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
                img.onload = img.onerror = () => resolve(true);
            });
        }));
    };

    useEffect(() => {
        if (gridRef.current) {
            waitForImages().then(() => {
                isoRef.current = new Isotope(gridRef.current!, {
                    itemSelector: '.grid-item',
                    layoutMode: 'masonry',
                });
            });
        }

        return () => {
            isoRef.current?.destroy();
        };
    }, []);

    const handleFilter = (filterKey: string, filterValue: string) => {
        setActiveKey(filterKey);
        isoRef.current?.arrange({ filter: filterValue });
    };

    return (
        <div className="portfolio-area style-1 position-relative">
            <div className="sec-shape">
                <img src="../../images/shape/wheel-shape.png" alt="shape" />
            </div>
            <div className="container">
                {partial && (
                    <div className="row">
                        <motion.div
                            className="col-12"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1, duration: 1.5, ease: 'easeOut' }}
                        >
                            <div className="te-section-title justify-content-center text-center">
                                <div className="te-section-content">
                                    <div>
                                        <span className="short-title">our portfolio</span>
                                    </div>
                                    <h2 className="title">
                                        Your Road to Reliable <br /> Repairs Cars
                                    </h2>
                                </div>
                            </div>
                            <ul className="te-portfolio-filter">
                                {filters.map((item) => (
                                    <li
                                        key={item.key}
                                        className={activeKey === item.key ? 'active' : ''}
                                        onClick={() => handleFilter(item.key, item.filter)}
                                    >
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                )}

                {partial ? (
                    <div className="row te-portfolio-isotope-wrapper" ref={gridRef}>
                        {ProjectV1Data.slice(0, 6).map((item, index) => (
                            <div
                                key={item.id}
                                className={`col-lg-4 col-sm-6 te-single-isotop grid-item ${item.category}`}
                            >
                                <SingleProjectV1Item item={item} index={index} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="row">
                        {ProjectV1Data.map((item, index) => (
                            <div className="col-lg-4 col-md-6" key={item.id}>
                                <SingleProjectV1Item item={item} index={index} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectV1;
