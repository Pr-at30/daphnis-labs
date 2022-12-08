import React from 'react'
import styles from './App.module.scss'
import { RxCross2 } from 'react-icons/rx'
import Navbar from './components/navbar/Navbar'
import SearchBar from './components/searchbar/SearchBar'
import Card from './components/cards/Card'
import ListGroup from './components/listGroup/ListGroup'

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>

        <div style={{ marginTop: '0.5rem' }}>Medical Darpan {'>'} Search {'>'} <b>FabiFlu Tablet</b></div>

        <SearchBar />

        <div className={styles.rdn}>
          <span><b>Paracetamol</b> (128 products)</span>
          <button className={styles.btn}>Aceclofenac <small>&nbsp;X</small></button>
          <button className={styles.btn}>500 mg <small>&nbsp;X</small></button>
          <span style={{ color: 'red' }}><small><b>Remove all</b></small></span>
        </div>

        <div className={styles.main}>
          <div className={styles.leftCards}>
            <ListGroup
              heading={'Related Category'}
              items={[
                'Paracetamol Tablets',
                'Paracetamol Syrup',
                'Paracetamol Powder',
                'Aceclofenac',
                'Magaladrate Simethicone Oral Suspension',
                'Mefanamic Paracetamol Syrup',
              ]}
            />

            <ListGroup
              heading={'Related Brands'}
              items={[
                'Cipmol Paracetamol',
                'Pandal Paracetamol Tablets',
                'Combiflam',
                'Crocin Tablets',
                'Calpol Paracetamol Tablets',
                'Sumo Tablets',
              ]}
            />

            <ListGroup
              heading={'Business Type'}
              items={[
                'Wholesaler',
                'Manufacturer',
                'Retailer',
                'Exporter',
              ]}
            />

            <ListGroup
              heading={'Strngth'}
              items={[
                '500 mg',
                '650 mg',
              ]}
            />

            <ListGroup
              heading={'Manufacturer'}
              items={[
                'Intas Pharmaceuticals Ltd.',
                'Alkem Laboratories Ltd.',
              ]}
            />

            <ListGroup
              heading={'Prescription/Non Prescription'}
              items={[
                'Intas Pharmaceuticals Ltd.',
                'Alkem Laboratories Ltd.',
              ]}
            />


          </div>

          <div className={styles.rightCards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>


      </div>
    </>
  )
}

export default App