import React from 'react';
import { View, Text } from 'react-native';
import { Table, TableRow, TableCell } from './index';

export function TableExample() {
  return (
    <View style={{ gap: 24 }}>
      {/* Basic Table */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>
          Basic Table
        </Text>
        <Table>
          <TableRow isHeader>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>30</TableCell>
            <TableCell>john@example.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>25</TableCell>
            <TableCell>jane@example.com</TableCell>
          </TableRow>
        </Table>
      </View>

      {/* Striped Table */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>
          Striped Table
        </Text>
        <Table striped>
          <TableRow isHeader>
            <TableCell>Component</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Version</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Button</TableCell>
            <TableCell>✅ Stable</TableCell>
            <TableCell>1.0.0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Input</TableCell>
            <TableCell>✅ Stable</TableCell>
            <TableCell>1.0.0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>🔄 Beta</TableCell>
            <TableCell>0.1.0</TableCell>
          </TableRow>
        </Table>
      </View>

      {/* Compact Table with Alignment */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>
          Compact Table with Alignment
        </Text>
        <Table compact>
          <TableRow isHeader>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Score</TableCell>
            <TableCell align="right">Rank</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Alice</TableCell>
            <TableCell align="center">95</TableCell>
            <TableCell align="right">1st</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob</TableCell>
            <TableCell align="center">87</TableCell>
            <TableCell align="right">2nd</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Charlie</TableCell>
            <TableCell align="center">82</TableCell>
            <TableCell align="right">3rd</TableCell>
          </TableRow>
        </Table>
      </View>

      {/* Table with Fixed Widths */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>
          Table with Fixed Column Widths
        </Text>
        <Table>
          <TableRow isHeader>
            <TableCell width={200}>Long Column Name</TableCell>
            <TableCell width={100}>Short</TableCell>
            <TableCell>Flexible Width</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>This is a very long cell content that might wrap</TableCell>
            <TableCell>Short</TableCell>
            <TableCell>This column will take remaining space</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Another long content example</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>More flexible content here</TableCell>
          </TableRow>
        </Table>
      </View>
    </View>
  );
} 